# Components

- Header
- ViewControl
  - ViewTypeButton
- TuneTypeControl
  - TuneTypeCheckbox
- AudioControl
  - PlayButton
  - SpeedButton
- ListView
  - ListItem
- TileView
  - TileItem
- SheetView
  - SheetItem

# State

- tunebook: [{tune}]
  - tune: tuneId, orderId, "name", "url", "type", ["aliases"], mySetting, [{settings}]
    - settings: id, "url", "key", "abc"

# Behaviour

- SET_ORDER
- SET_MY_SETTING
