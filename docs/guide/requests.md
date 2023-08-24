# REQUESTS


## Expand File Request
The provided code defines a record `ExpandFileRequest` to hold data related to an "expand file" request. It includes a method `IsValid` to check if the provided request is valid by ensuring that at least one data source is provided.

::: details FileRequest Code
```csharp
public record ExpandFileRequest(IFile? file, string? fileUrl, string? b64File, JsonElement? data, string? dataUrl, string? outputFormatfile) // todo: correct data
{
    public bool isValid(out string? validationError)
    {
        if (file == null && fileUrl == null && b64File == null)
        {
            validationError = "At least one data source is required";
            return false;
        }
        if (data == null && dataUrl == null)
        {
            validationError = "At least one data source is required";
            return false;
        }
        // todo: validate when we have the multiple sources
        validationError = null;
        return true;
    }
}

```

:::

`1.` Records are used to define classes that are primarily meant for holding immutable data. This record has several properties:

**A.** `IFile? file`: Represents an interface (IFile) for a file. The ? indicates that the property is nullable.

**B.** `string? fileUrl`: Represents the URL of a file.

**C.** `string? b64File:` Represents a Base64 encoded file.

**D.** `JsonElement? data:` Represents a JSON element containing data.

**E.** `string? dataUrl`: Represents the URL of data.

**F.** ``string? outputFormatfile:`` Represents the output format for the file.

This record represents a data structure for an "expand file" request.

As seen in the code below 

```csharp
public record ExpandFileRequest(IFile? file, string? fileUrl, string? b64File, JsonElement? data, string? dataUrl, string? outputFormatfile)

```
###

`2.` The `isValid` method takes an `out` parameter `validateError` to validate whether the `ExpandFileRequest` instance is valid.

```csharp

```
### The validation logic:

**A.** The method first checks if all of the data source properties (`file`, `fileUrl`, and `b64File`) are null. If they are all `null`, it means none of them have been provided, and the method sets `validationError` to the error message **`"At least one data source is required"`**.

**B.** Similarly, it checks if both `data` and `dataUrl` are `null`. If they are both `null`, it again sets `validationError` to the same error message.

**C.** If either of the checks above fail (meaning at least one data source is provided), it sets `validationError` to `null`.

### Multiple Source Validation

```csharp
validationError = null;

```

### Final Result

```csharp
public record ExpandFileRequest(IFile? file, string? fileUrl, string? b64File, JsonElement? data, string? dataUrl, string? outputFormatfile) // todo: correct data
{
    public bool isValid(out string? validationError)
    {
        if (file == null && fileUrl == null && b64File == null)
        {
            validationError = "At least one data source is required";
            return false;
        }
        if (data == null && dataUrl == null)
        {
            validationError = "At least one data source is required";
            return false;
        }
        // todo: validate when we have the multiple sources
        validationError = null;
        return true; //[!code focus]
    }
}
```

If either of the checks above fail, the method returns `false` to indicate that the validation has failed. Otherwise, it returns `true`, indicating that the validation is successful.

## Expand File Request2



::: details  FileRequest Code2
```csharp
public record ExpandFileRequest2(IFormFile? file, string? fileUrl, string? b64File, string? data, string? dataUrl, string? outputFileFormat) // todo: correct data
{
    public bool isValid(out string? validationError)
    {
        if (file == null && fileUrl == null && b64File == null)
        {
            validationError = "At least one data source is required";
            return false;
        }
        if (data == null && dataUrl == null)
        {
            validationError = "At least one data source is required";
            return false;
        }
        // todo: validate when we have the multiple sources
        validationError = null;
        return true;
    }
}

```
:::