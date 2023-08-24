# HANDLERS

### Handles validation of each file request in the [RequestClass](/guide/requests) 

## Expand Text Request Handler

::: details Text
```csharp
public static async Task<CallResult<string>> Handle(ExpandTextRequest message, CancellationToken cancellationToken)
    {
        if (!message.isValid(out var validationError))
        {
            return CallResult<string>.error(validationError!);
        }
        // get the data
        IReadOnlyDictionary<string, object>? input = null;
        if (message.dataUrl != null)
        {
            try
            {
                var output = await new HttpClient().GetFromJsonAsync<JsonElement>(message.dataUrl, cancellationToken);
                input = output.jsonToHash();
            }
            catch(Exception e)
            {
                // todo: handle this
            }
        }
        else if (message.data != null)
        {
            input = message.data.Value.jsonToHash();
        }
        if (input == null)
        {
            return CallResult<string>.error("No valid data is available");
        }
        // expand based 
        var expander = new ExpanderService(); // use injection?
        string? expanded = null;
        string? error;
        bool ok;
        if (message.template != null)
        {
            (ok, expanded, error) = await expander.fromString(message.template, input!);
        }
        else if (message.templateUrl != null)
        {
            (ok, expanded, error) = await expander.fromTextUrl(message.templateUrl!, input!);
        }
        //else if (message.file != null)
        //{
        //    using var stream = message.file!.OpenReadStream();
        //    (ok, expanded, error) = await expander.fromStream(stream, input!);
        //} 
        else
        {
            return CallResult<string>.error("No template source found");
        }
        if (!ok)
        {
            return CallResult<string>.error(error!);
        }
        return CallResult<string>.ok(expanded!);
    }


```
:::

## Expand File Request Handler

::: details File 
```csharp
public static async Task<CallResult<string>> Handle(ExpandFileRequest message, CancellationToken cancellationToken)
    {
        if (!message.isValid(out var validationError))
        {
            return CallResult<string>.error(validationError!);
        }
        // get the data
        IReadOnlyDictionary<string, object>? input = null;
        if (message.dataUrl != null)
        {
            try
            {
                var output = await new HttpClient().GetFromJsonAsync<JsonElement>(message.dataUrl, cancellationToken); // todo: capture non 200s
                input = output.jsonToHash();
            }
            catch(Exception e)
            {
                // todo: handle this
            }
        }
        else if (message.data != null)
        {
            input = message.data.Value.jsonToHash();
        }
        if (input == null)
        {
            return CallResult<string>.error("No valid data is available");
        }
        // expand based 
        var expander = new ExpanderService(); // use injection?
        string? error;
        bool ok;
        byte[]? expanded;
        if (message.file != null)
        {
            var fileStream = message.file.OpenReadStream();
            (ok, expanded, error) = await expander.fromFile(fileStream, input!, message.outputFormatfile ?? "pdf");
        }
        else if (message.fileUrl != null)
        {
            (ok, expanded, error) = await expander.fromFileUrl(message.fileUrl!, input!, message.outputFormatfile ?? "pdf");
        }
        else if (message.b64File != null)
        {
            (ok, expanded, error) = await expander.fromB64File(message.b64File!, input!, message.outputFormatfile ?? "pdf");
        }
        else
        {
            return CallResult<string>.error("No template source found");
        }
        if (!ok)
        {
            return CallResult<string>.error(error!);
        }
        return CallResult<string>.ok(Convert.ToBase64String(expanded!));
    }

```
:::

This code defines a method `Handle` that processes an expand file request ([ExpandFileRequest](/guide/requests)) by validating the request, retrieving data, expanding the file based on different sources, and returning the expanded content (in Base64) if successful or an error message if something goes wrong during any step of the process. 

### INPUT

**The method takes two parameters:**

**A.** `message`: An instance of ExpandFileRequest containing the data for the expand file request.

**B.** `cancellationToken`: A cancellation token used to cancel the asynchronous operation if needed.

The method returns a Task of type `CallResult<string>`. The` CallResult<string>` type likely represents the outcome of an operation, including a string result if successful or an error message if not.

### VALIDATION

```csharp
if (!message.IsValid(out var validationError))//[!code focus]

```
The line above checks if the `ExpandFileRequest` is valid by calling the `IsValid` method of the [ExpandFileRequest](/guide/requests) class. If the request is not valid, it sets the `validationError` variable (using the out parameter of the IsValid method) and returns an error result using `CallResult<string>.Error(validationError!)`.

### Data Retrieval:

This part involves fetching data from a specified URL (`message.dataUrl`) or from a provided data string (`message.data`). If data is available, it's converted to an `IReadOnlyDictionary<string, object>` using the `jsonToHash()` method (which seems to be a custom extension method).

### Expanding the File:

**A.** An instance of [ExpanderService](/guide/expanderService) is created (which might handle the expansion process).

**B.** Depending on the available source (`message.file`, `message.fileUrl`, or `message.b64File`), the file is expanded using the appropriate method from the [ExpanderService](/guide/expanderService).

**C.** The expansion result (`ok, expanded, error`) is captured.

### Result Handling:

***If*** no valid template source is found, an error message is returned using `CallResult<string>.Error("No template source found")`.

***If*** the expansion operation was not successful (`!ok`), an error message is returned using `CallResult<string>.Error(error!)`.

***If*** the expansion was successful, the expanded byte array is converted to a Base64-encoded string using `Convert.ToBase64String(expanded!)`.

## Expand File Request 2 Handler

::: details File 2
```csharp
public static async Task<CallResult<byte[]>> Handle(ExpandFileRequest2 message, CancellationToken cancellationToken)
    {
        try
        {
            if (!message.isValid(out var validationError))
            {
                return CallResult<byte[]>.error(validationError!);
            }
            // get the data
            IReadOnlyDictionary<string, object>? input = null;
            if (message.dataUrl != null)
            {
                try
                {
                    var output = await new HttpClient().GetFromJsonAsync<JsonElement>(message.dataUrl, cancellationToken); // todo: capture non 200s
                    input = output.jsonToHash();
                }
                catch (Exception e)
                {
                    // todo: handle this
                }
            }
            else if (message.data != null)
            {
                input = JsonSerializer.Deserialize<JsonElement>(message.data!).jsonToHash();
            }
            if (input == null)
            {
                return CallResult<byte[]>.error("No valid data is available");
            }
            // expand based 
            var expander = new ExpanderService(); // use injection?
            string? error;
            bool ok;
            byte[]? expanded;
            if (message.file != null)
            {
                var fileStream = message.file.OpenReadStream();
                (ok, expanded, error) = await expander.fromFile(fileStream, input!, message.outputFileFormat ?? "pdf");
            }
            else if (message.fileUrl != null)
            {
                (ok, expanded, error) = await expander.fromFileUrl(message.fileUrl!, input!, message.outputFileFormat ?? "pdf");
            }
            else if (message.b64File != null)
            {
                (ok, expanded, error) = await expander.fromB64File(message.b64File!, input!, message.outputFileFormat ?? "pdf");
            }
            else
            {
                return CallResult<byte[]>.error("No template source found");
            }
            if (!ok)
            {
                return CallResult<byte[]>.error(error!);
            }
            return CallResult<byte[]>.ok(expanded!, "Done expanding template");
        }
        catch(Exception e)
        {
            return CallResult<byte[]>.error(e.GetBaseException().Message);
        }
    }

```
:::