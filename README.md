# JSON Importer/Exporter

Exports RemNote data into a comprehensive JSON file, and imports RemNote data using the JSON format.

## Dev Set Up
```
npm run dev
```

## Resources
https://plugins.remnote.com/getting-started/quick_start_guide

## Documenting the Undocumented RemNote package
remNamespace = plugin.rem;
rem = remNamespace.findOne(id);
rem.getChildrenRem() gets the children one level lower
rem.getDescendents() gets all levels of children