from importlib.util import spec_from_file_location,module_from_spec
from pathlib import Path
spec=spec_from_file_location('collector',Path(__file__).with_name('collect-travel-89-93-media.py'))
mod=module_from_spec(spec)
spec.loader.exec_module(mod)
get=mod.get
