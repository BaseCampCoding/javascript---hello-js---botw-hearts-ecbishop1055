# JavaScript - Breath of the Wild Hearts

In this assignment you are going use JavaScript to implement a Breath of the Wild style hearts UI. I've provided starter HTML and CSS. I've also implement the first control. Your job is to implement the remaining 3 controls.

- **Heal:** When the heal button is clicked, you should update the UI to reflect Link's health after being healed by the amount in associated numerical input. **Note:** unlike the damage input, the amount that link is healed should be interpreted as whole hearts and not quarters.
- **Add Heart Container:** When the add heart container button is clicked, the UI should update to reflect Link's additional heart container.
- **Overheal:** When the overheal button is clicked, Link should be healed to full and then receive the amount of extra hearts indicated by the associated numerical input. Again, that number should be interpreted as a number of whole hearts, not quarters. Don't forget to add the `extra` class to the hearts to make sure that they are styled appropriately. **Note:** This one is a bit tricky. To implement overhealling correctly, you will almost certainly have to fix the damage, heal, and add heart container implementations. Here are some specific things to look out for:
  - Losing a quarters of an extra heart should remove it from Link's max health.
  - Link should not be able to heal his extra hearts' missing quarters.
  - Normal heart containers should always be before extra heart containers.
  - Overhealing does not stack.
    - Overhealing a smaller amount than your existing extra hearts should have no effect.
    - Overhealing a larger amount than your existing extra hearts should overheal to that larger amount.

### Rubric

- [ ] Heal
- [ ] Add Heart Container
- [ ] Basic Overheal (heal to full and add extra, but don't fix other controls)
- [ ] Correct Overheal
