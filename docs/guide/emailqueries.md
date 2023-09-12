# Queries / Get Requests

## 1. EmailStatus

This endpoint is used in checking the status of a single email.
- `REST` endpoint : api/email/status/{emailId}

###  Input Fields
| Fields | DataType | Required |
|:---: | :---: | :----:|
| EmailId| Guid | Yes |

### Output Fields


| Fields | DataType |
|:---: | :---: |
| Code| int |
| Message | String |
| Result | EmailState |
| Success | Boolean |

## 2. EmailStatuses
    This endpoint is used in checking the status of a provided list of emails.
- `REST` endpoint : api/email/status
- 
###  Input Fields
| Fields | DataType | Required |
|:---: | :---: | :----:|
| EmailIds | List of Guids | Yes |
### Output Fields


| Fields | DataType |
|:---: | :---: |
| Code | Int |
| Message | String |
| Result | EmailState |
| Success | Boolean |


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
| Pending |
| Success |
| Failed |




<!-- **NB:** 

- `MultiEmailStatusRequest` refers to list email Ids to be provided.
- `T` datatype refers to -->


