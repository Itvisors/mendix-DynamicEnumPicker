## DynamicEnumPicker
Widget used to show an enumeration either as dropdown or as a radiobuttonlist, where the user can choose which values of the enumeration to display and change the captions of the enumeration values (including translations and other attributes).

## Features
- Show (part of) an enumarion as dropdown
- Show (part of) an enumarion as radiobuttonlist
- Choose the captions of the enumeration values, include other attributes and translations
- Other default behavior of dropdowns and radiobuttons

## Typical usage scenario
- When you do not want the user to be able to select any value of an enumeration
- When the captions of the enumeration do not suffice
- When the value of another attribute is needed for (one of) the caption(s)

## Configuration
### General
- Default mendix behavior for labeling, visibility and editability.
- Enumeration: the enumeration to base the widget on
- Values: Here the values can be added that the user can select
  - Key: This should be exactly the same key as the key of the enumeration value to add
  - Value to show (trabslatable) : The caption of the enumeration value to show
- Editable: Whether the user is allowed to edit the enumeration.
- Visualization: Whether the widget should be shown as dropdown or as radiobuttonlist
- Direction: Horizontal vs Vertical, only applicable when radiobuttons is select
- Placeholder: caption for the empty value, only applicable when dropdown is selected

### Events
- Event to be triggered onchange.
