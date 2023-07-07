const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/data', (req, res) => {
  const data = [
    {
      name: 'FirstName',
      label: 'First Name',
      validationRegex: '^[A-Za-z]+(?:\\s+[A-Za-z]+)*$',
      errorMsg: 'Enter the First Name correctly',
      id: 1,
      disabled: false,
      isRequired: true,
      dataType: 30,
      displayType: 30,
      lookUpTable: [],
      pickListEntry: [],
    },
    {
      name: 'FamilyName',
      label: 'Family Name',
      validationRegex: '^[A-Za-z]+(?:\\s+[A-Za-z]+)*$',
      errorMsg: 'Enter the Family Name correctly',
      id: 2,
      disabled: false,
      isRequired: true,
      dataType: 30,
      displayType: 30,
      lookUpTable: [],
      pickListEntry: [],
    },
    {
      name: 'EMAIL',
      label: 'Email Address',
      validationRegex: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
      errorMsg: 'Enter a valid Email Address',
      id: 5,
      disabled: false,
      isRequired: false,
      dataType: 30,
      displayType: 30,
      lookUpTable: [],
      pickListEntry: [],
    },
    {
      name: 'Password',
      label: 'Password',
      id: 6,
      validationRegex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$',
      errorMsg: 'Password is not in correct format',
      disabled: false,
      isRequired: false,
      dataType: 30,
      displayType: 50,
    },
    {
      name: 'FruitPicker',
      label: 'Pick a fruit',
      id: 3,
      disabled: false,
      isRequired: false,
      dataType: 30,
      displayType: 0,
      lookUpTable: [],
      pickListEntry: [
        { key: 31, value: 'Apple', name: 'apple' },
        { key: 32, value: 'Mango', name: 'mango' },
        { key: 33, value: 'Pine-Apple', name: 'pine-apple' },
      ],
    },
    {
      name: 'FruitPickerCheckbox',
      label: 'Choose one fruit',
      id: 4,
      disabled: false,
      isRequired: false,
      dataType: 30,
      displayType: 40,
      lookUpTable: [],
      pickListEntry: [
        { key: 41, value: 'Apple', name: 'apple' },
        { key: 42, value: 'Mango', name: 'mango' },
        { key: 43, value: 'Pine-Apple', name: 'pine-apple' },
      ],
    },
    {
      name: 'FileUpload',
      label: 'Upload the file',
      id: 7,
      disabled: false,
      isRequired: false,
      dataType: 30,
      displayType: 60,
      filesAccepted:'.jpg,.jpeg,.png,.pdf',
      lookUpTable: [],
      pickListEntry: [],
    },
  ];

  res.json(data);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
