# Queries / Get Requests

## 1. EmailStatus

This endpoint is used in checking the status of a single email.
- `REST` endpoint : api/email/status/{emailId}

###  Input Fields
| Fields | DataType | Required |
|:---: | :---: | :----:|
| emailId| Guid | Yes |

### Output Fields


| Fields | DataType |
|:---: | :---: |
| code| int |
| message | String |
| result | EmailState |
| success | Boolean |

## 2. EmailStatuses
    This endpoint is used in checking the status of a provided list of emails.
- `REST` endpoint : api/email/status
- 
###  Input Fields
| Fields | DataType | Required |
|:---: | :---: | :----:|
| emailIds | List of Guids | Yes |
### Output Fields


| Fields | DataType |
|:---: | :---: |
| code | Int |
| message | String |
| result | EmailState |
| success | Boolean |


### Email State

| Fields | DataType |
|:---: | :---: |
| id | Guid |
| status | EmailStatus |
| response | String |
| lastTried | DateTime |


### Email Status

| Values | 
|:---: |
| pending |
| success |
| failed |




<!-- **NB:** 

- `MultiEmailStatusRequest` refers to list email Ids to be provided.
- `T` datatype refers to -->


