# Mutation

## Expand Text Request Input

| Fields | Datatype | Required |
| :---: | :---: | :----: |
|Data| JSON | No |
|DataUrl | String |No|
|Template | String | Yes|
|TemplateUrl|String|No|


### Validation Notice :

The fields in the table are all `nullable` but requires ** at least**  `1` data source each : `templateUrl or template` and `data or dataUrl` .

If none of those sources are provided, a `ValidationError` stating that ` At least one data source is required ` error will be displayed.


## Expand File Request Input

| Fields | Datatype | Required |
| :---: | :---: | :----: |
| B64File | string | No |
| Data | Json | No |
| DataUrl | String | No |
| File | IFile | No |
| FileUrl | String | No|
|OutputFormatFile | String | No |

### Validation Notice:

The fields in the table are all `nullable` but requires ** at least**  `1` data source each : `file or fileUrl or b64File` and `data or dataUrl` .

If none of those sources are provided, a `ValidationError` stating that ` At least one data source is required ` error will be displayed.


### NB:

**The Picture Insertion Logic**

::: details Code

```csharp

if (e.FieldName.StartsWith("Picture:"))
{
    switch (e.Value)
    {
        case string x:
            // Picture insertion logic based on conditions
            break;
        default:
            break;
    }
}


```

:::

The code above check if the `FiledName` start with `Picture`. If ***`true`*** it proceeds to handle the picture insertion logic above based on the type of the  `e.value` .




