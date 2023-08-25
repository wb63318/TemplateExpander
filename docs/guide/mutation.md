# Mutation / Post Requests

## 1. Expand Text 

This endpoint is used for generating a text from a template.

- `GRAPHQl` endpoint : expandText
- `REST` endpoint : /api/expander/expandText

**How it works:** 

- You provide the endpoint with a template and a data source and then it generates a text for you.

- **NB:** The template should have placeholders for the data you would want there. See [examples](/guide/example) for more details.

### Input Fields

| Fields | Datatype | Required |
| :---: | :---: | :----: |
|Data| JSON | No |
|DataUrl | String |No|
|Template | String | Yes|
|TemplateUrl|String|No|


### Output Fields


| Fields | DataType | 
|:---: | :---: |
| Code| int |
| Message | String |
| Result | String |
| Success | Boolean |

### Validation Notice :

- The fields in the table are all `nullable` 
- If none of those sources are provided, a `ValidationError` stating that ` At least one data source is required ` error will be displayed.


## 2. Expand File 

This endpoint is used for generating a file from a template.

- `GRAPHQl` endpoint : templateIsValid
- `REST` endpoint : /api/expander/expandFile

**How it works:**

- You provide the endpoint with a template and a data source and then it generates a document for you.

**NB:** The template should have placeholders for the data you would want there. See [examples](/guide/example) for more details.


### Input Fields

| Fields | Datatype | Required |
| :---: | :---: | :----: |
| B64File | string | No |
| Data | Json | No |
| DataUrl | String | No |
| File | IFile | No |
| FileUrl | String | No|
|OutputFormatFile | String | No |


### Output Fields


| Fields | DataType | 
|:---: | :---: |
| Code| int |
| Message | String |
| Result | String |
| Success | Boolean |

### Validation Notice:

- The fields in the table are all `nullable` 
- If none of those sources are provided, a `ValidationError` stating that ` At least one data source is required ` error will be displayed.









