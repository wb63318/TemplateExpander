# Mutation / Post Requests


## 1. Send Email 

This endpoint is used for sending an email.

- `GRAPHQl` endpoint : 
- `REST` endpoint : /api/email/send



### Input Fields

| Fields | Datatype | Required |
| :---: | :---: | :----: |
|from| String | Yes |
|to | String |Yes|
|message | String | Yes|
|sendAsText|Bool|Yes|



### Output Fields


| Fields | DataType | 
|:---: | :---: |
| code| Int |
| message | String |
| result | Guid |
| success | Boolean |

### Validation Notice :

- The fields in the table are all `required` 



## 2. Send Email With Attachment 

This endpoint is used for sending and email with a file attachment.

- `GRAPHQl` endpoint : 
- `REST` endpoint : /api/email/sendWithAttachment



### Input Fields

| Fields | Datatype | Required |
| :---: | :---: | :----: |
|From| String | Yes |
|to | String |Yes|
|message | String | Yes|
|sendAsText|Bool|Yes|
|files| IFIle|No|
|fileUrls| List`<string>`|No|


### Output Fields


| Fields | DataType | 
|:---: | :---: |
| code| Int |
| message | String |
| result | Guid |
| success | Boolean |

### Validation Notice :

- The fields in the table are all `required` except the `file`  and `fileUrls` .

