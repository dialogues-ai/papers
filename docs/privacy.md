---
sidebar_position: 7
---

# Privacy

:::info

For this beta version, we utilized Google Cloud Platform to deliver the product. 
 
:::

## Database

All entries are hosted on a [Firebase Database](https://firebase.google.com/docs/firestore) with a set of security rules.

None of the data is being sold, or given, to anybody. Our relationship is solely through direct relationships with the user. Third parties have no purpose in this interaction.

Data on the backend is encrypted, so, granted anybody has access, it cannot be easily read.
<img src="/grow-docs/img/privacy/firebase_encrypted.png" width="400" align="middle"/>

Noone from Grow or any organization reads your journal entries.

Eventually, we'd like to build really cool machine learning models as features, and may need to read user data, but:
1. That is not the present case
2. When it is time, users will be prompted to opt in to such analysis
3. Extreme efforts will be made to preprocess all text to anonymize user information and, even, distort actual text information where possible. 
4. Jonny's data is the most at risk at present. Relative to those on the database, it is the most valuable for modelling. It is the most complete, and most ready to be used for model training purposes. New users are far less at risk.


## Future privacy plan
We will communicate all new changes as they occur. This is in the plans for the future year's worth of development.

The Grow team is developing a system by which:
1. The default option is for user's to host their own data. This increases privacy.
2. Create ways to transparently communicate what data was read when, and by whom.
3. Data will only be read by user's agreeing to share entries with third-parties (such as teachers, and therapists).