# MUTATIONS

```csharp
 public static Task<CallResult<string>>
  expandFile(ExpandFileRequest request, IMessageBus bus, CancellationToken cancellationToken)
   => bus.InvokeAsync<CallResult<string>>(request, cancellationToken);

```