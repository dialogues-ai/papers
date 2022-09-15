---
sidebar_position: 6
---

# Known Bugs


:::info For best use:
1. Grow is best used on a computer with a screen and mouse.
2. Make sure there is a good internet connection.
3. Entries can be made on mobile.
4. The stats can be viewed on a tablet, but much of the interactive features work best with a mouse, not a finger.
:::



This software was built on Flutter as a beta app. There are known issues with the build.
This page is here to help you get through things until the bugs can be fixed and the software can be upgraded.

If you want to report something, please make a pull request, or report the issue on the discord.


# Buggy Items

| Screen        | Error                        | Possible Solutions                            |
| ------------- | -----------                  | -----------                                   |
| Entry Screen  | App is a blank white screen  | App Load Error                                |
|               | Entry fails to submit        | Category Input,<br /> Time Field Formatting   |
|               | Entries blank with loading symbol  | Entries Decrypting                      |
| Graph Screen  | Draggable Trash Target does not disappear | Needs Refresh                    |




## Category Inputs

May cause entry submission errors.

Press `Enter` instead of Tab. Your category field should have a small icon to its left, as shown in the second image.
<img src="/grow-docs/img/entry_screen/error_category_entry.png" width="180"/>
<img src="/grow-docs/img/entry_screen/correct_category_entry.png" width="172"/>

If the category is left as it is in the first image, the entry sheet will not submit.


## App Load Error

Sometimes the app fails to load for a number of reasons.  
Simply try a hard refresh. ♺

If a refresh doesn't work, make sure you have a strong internet connection. The app frequently fails to load on mobile if there is not a strong internet connection.


## Entries Decrypting