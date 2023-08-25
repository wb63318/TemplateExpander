# Mutation / Post Requests


## 1. Send Email 

This endpoint is used for sending an email.

- `GRAPHQl` endpoint : 
- `REST` endpoint : /api/email/send



### Input Fields

| Fields | Datatype | Required |
| :---: | :---: | :----: |
|From| string | Yes |
|To | String |Yes|
|Message | String | Yes|
|SendAsText|Bool|Yes|



### Output Fields


| Fields | DataType | 
|:---: | :---: |
| Code| int |
| Message | String |
| Result | Guid |
| Success | Boolean |

### Validation Notice :

- The fields in the table are all `required` 



## 2. Send Email With Attachment 

This endpoint is used for sending and email with a file attachment.

- `GRAPHQl` endpoint : 
- `REST` endpoint : /api/email/sendWithAttachment



### Input Fields

| Fields | Datatype | Required |
| :---: | :---: | :----: |
|From| string | Yes |
|To | String |Yes|
|Message | String | Yes|
|SendAsText|Bool|Yes|
|Files| IFIle|No|
|FileUrls| List`<string>`|No|


### Output Fields


| Fields | DataType | 
|:---: | :---: |
| Code| int |
| Message | String |
| Result | Guid |
| Success | Boolean |

### Validation Notice :

- The fields in the table are all `required` except the `file`  and `fileUrls` .

