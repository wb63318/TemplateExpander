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
|data| JSON | No |
|dataUrl | String |No|
|template | String | Yes|
|templateUrl|String|No|


### Output Fields


| Fields | DataType | 
|:---: | :---: |
| code| int |
| message | String |
| result | String |
| success | Boolean |

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
| b64File | string | No |
| data | Json | No |
| dataUrl | String | No |
| file | IFile | No |
| fileUrl | String | No|
|outputFormatFile | String | No |

**NB:** 
- The file is also known as the template
- The fileUrl is also knowns as the templateUrl
- The default output File format is a `PDF`


### Output Fields


| Fields | DataType | 
|:---: | :---: |
| code| int |
| message | String |
| result | String |
| success | Boolean |

### Validation Notice:

- The fields in the table are all `nullable` 
- If none of those sources are provided, a `ValidationError` stating that ` At least one data source is required ` error will be displayed.









