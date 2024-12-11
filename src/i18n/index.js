import i18n from 'i18next';

// export default function localizedString(
//   name,
//   replace = undefined,
//   params = {},
// ) {
//   let stringValue = i18n.t(name, params);
//   if (replace) {
//     stringValue = stringValue.replace(`{${replace.key}}`, replace.value);
//     if (replace.key2)
//       stringValue = stringValue.replace(`{${replace.key2}}`, replace.value2);
//   }
//   return stringValue;
// }

export default function localizedString(name = '', replace = {}, params = {}) {
  let stringValue = i18n.t(name, params);

  // Perform replacements if replace object is provided
  if (Object.keys(replace).length > 0) {
    Object.entries(replace).forEach(([key, value]) => {
      stringValue = stringValue.replace(new RegExp(`{${key}}`, 'g'), value);
    });
  }

  return stringValue;
}
