"""Recompresse les images rendues dans Blender pour le web.

Usage : python scripts/optimize_frames.py <dossier_source> public/sequence
Le dossier source contient corners.json, frames/ et arc/ tels que sortis de Blender.
"""
import shutil
import sys
from pathlib import Path

from PIL import Image

QUALITY = 75  # au-delà, le gain visuel est invisible sur ces scènes sombres


def main(src: Path, dst: Path) -> None:
    dst.mkdir(parents=True, exist_ok=True)
    shutil.copy(src / "corners.json", dst / "corners.json")
    before = after = 0
    for path in sorted(src.glob("*/*/*.webp")):
        out = dst / path.relative_to(src)
        out.parent.mkdir(parents=True, exist_ok=True)
        Image.open(path).save(out, "WEBP", quality=QUALITY, method=6)
        before += path.stat().st_size
        after += out.stat().st_size
    print(f"{before / 1e6:.1f} Mo -> {after / 1e6:.1f} Mo")


if __name__ == "__main__":
    main(Path(sys.argv[1]), Path(sys.argv[2]))
