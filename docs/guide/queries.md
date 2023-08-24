# QUERIES


```csharp
[ExtendObjectType<Query>]
public class Queries
{
    public async Task<CallResult<bool>> templateIsValid(string template)
    {
        // todo: use fluid to try parsing
        return CallResult<bool>.error("Not implemented");
    }
}

```
The code defines a class named `Queries` with a method `TemplateIsValid`, which is intended to be a `GraphQL` query. 