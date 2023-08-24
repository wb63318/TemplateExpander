---
next : false
---

# CONTROLLER

Controller is where the `api/expander/expandFile` is expands a file using a specified request and returns the expanded content as a PDF file.

## Parameters 

 The `request` param is the request containing the necessary information for the file expansion using the [ExpandedRequest2](/guide/requests) from the request class.

## How it Works

``` csharp


public async Task<IActionResult> expandFile([FromForm] ExpandFileRequest2 request, CancellationToken cancellation)
    {
        var ret = await bus.InvokeAsync<CallResult<byte[]>>(request, cancellation);
        if (ret.success && ret.result is not null)
        {
            return File(ret.result, "application/pdf");
        }
        return BadRequest(ret.message);
    }

```

1. The code checks if the file expansion was successful and a result is available t the returns the content as a `PDF` file using the highlighted code below
``` csharp{4-7}


public async Task<IActionResult> expandFile([FromForm] ExpandFileRequest2 request, CancellationToken cancellation)
    {
        var ret = await bus.InvokeAsync<CallResult<byte[]>>(request, cancellation);
        if (ret.success && ret.result is not null)
        {
            return File(ret.result, "application/pdf");
        }
        return BadRequest(ret.message);
    }

```
2. Else the a bad request response is returned with an error message 

::: details This Line of Code Returns Error Message
``` csharp
return BadRequest(ret.message);

```
:::

This controller hits the post `/api/expander/expandFile`



