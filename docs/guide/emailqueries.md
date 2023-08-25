# Queries / Get Requests

## 1. EmailStatus

This endpoint is used in checking the status of a single email.
- `REST` endpoint : api/email/status/{emailId}

###  Input Fields
| Fields | DataType | Required |
|:---: | :---: | :----:|
| EmailId| Guid | Yes |
| Bus | IMessageBus| |

### Output Fields


| Fields | DataType |
|:---: | :---: |
| Code| int |
| Message | String |
| Result | T |
| Success | Boolean |

## 2. EmailStatuses
    This endpoint is used in checking the status of a provided list of emails.
- `REST` endpoint : api/email/status
- 
###  Input Fields
| Fields | DataType | Required |
|:---: | :---: | :----:|
| Request| MultiEmailStatusRequest | Yes |
| Bus | IMessageBus| |

### Output Fields


| Fields | DataType |
|:---: | :---: |
| Code| int |
| Message | String |
| Result | T |
| Success | Boolean |

**NB:** 

- `MultiEmailStatusRequest` refers to list email Ids to be provided.
- `T` datatype refers to


