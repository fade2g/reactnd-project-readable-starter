{
  "output": {
    "templateId": "",
    "name": "",
    "locale": "en_US",
    "type":"JSON"
  },
  "template":
  [{
    "id": "entry0",
    "type": "root",
    "jsonType": "arrayobject",
    "dataType": null,
    "name": null,
    "repeat": 100,
    "options": {},
    "children": [{
      "id": "entry1",
      "name": "id",
      "jsonType": "value",
      "dataType": "uuid",
      "repeat": "1",
      "options": {},
      "children": []
    }, {
      "id": "entry2",
      "name": "timestamp",
      "jsonType": "value",
      "dataType": "epoch",
      "repeat": "1",
      "options": {"date-from": "2014-01-01", "date-to": "2017-01-01", "precision": "millis"},
      "children": []
    }, {
      "id": "entry3",
      "name": "title",
      "jsonType": "value",
      "dataType": "words",
      "repeat": "1",
      "options": {"length": "10"},
      "children": []
    }, {
      "id": "entry4",
      "name": "body",
      "jsonType": "value",
      "dataType": "paragraphs",
      "repeat": "1",
      "options": {"length": "2", "before": "", "after": "\\n"},
      "children": []
    }, {
      "id": "entry5",
      "name": "author",
      "jsonType": "value",
      "dataType": "full-name",
      "repeat": "1",
      "options": {"case": "lower", "full-name-format": "fsl"},
      "children": []
    }, {
      "id": "entry6",
      "name": "category",
      "jsonType": "value",
      "dataType": "list-of-values",
      "repeat": "1",
      "options": {"values": "react\nredux\nudacity"},
      "children": []
    }, {
      "id": "entry7",
      "name": "voteScore",
      "jsonType": "value",
      "dataType": "number",
      "repeat": "1",
      "options": {"min": "-10", "max": "10", "precision": "0", "format": "Default"},
      "children": []
    }, {
      "id": "entry8",
      "name": "deleted",
      "jsonType": "value",
      "dataType": "boolean",
      "repeat": "1",
      "options": {},
      "children": []
    }]
  }]
}
