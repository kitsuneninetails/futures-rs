initSidebarItems({"enum":[["MaybeDone","`MaybeDone`, a future that may have completed."]],"fn":[["empty","Creates a future which never resolves, representing a computation that never finishes."],["lazy","Creates a new future from a closure."],["maybe_done","Creates a new future from a closure."],["poll_fn","Creates a new future wrapping around a function returning `Poll`."],["ready","Create a future that is immediately ready with a value."]],"struct":[["AndThen","Future for the `and_then` combinator, chaining a computation onto the end of another future which completes successfully."],["CatchUnwind","Future for the `catch_unwind` combinator."],["Empty","A future which is never resolved."],["ErrInto","Future for the `err_into` combinator, changing the error type of a future."],["Flatten","Future for the `flatten` combinator."],["FlattenSink","Future for the `flatten_sink` combinator, flattening a future-of-a-sink to get just the result of the final sink as a sink."],["FlattenStream","Future for the `flatten_stream` combinator, flattening a future-of-a-stream to get just the result of the final stream as a stream."],["Fuse","A future which \"fuses\" a future once it's been resolved."],["FutureObj","A custom trait object for polling futures, roughly akin to `Box<dyn Future<Output = T> + Send + 'a>`."],["FutureOption","A future representing a value which may or may not be present."],["Inspect","Do something with the item of a future, passing it on."],["IntoFuture","Converts a `TryFuture` into a normal `Future`"],["IntoStream","A type which converts a `Future` into a `Stream` containing a single element."],["Join","Future for the `join` combinator, waiting for two futures to complete."],["Join3","Future for the `join3` combinator, waiting for three futures to complete."],["Join4","Future for the `join4` combinator, waiting for four futures to complete."],["Join5","Future for the `join5` combinator, waiting for five futures to complete."],["Lazy","A future which, when polled, invokes a closure and yields its result."],["LocalFutureObj","A custom trait object for polling futures, roughly akin to `Box<dyn Future<Output = T> + 'a>`."],["Map","Future for the `map` combinator, changing the type of a future."],["MapErr","Future for the `map_err` combinator, changing the type of a future."],["MapOk","Future for the `map_ok` combinator, changing the type of a future."],["OrElse","Future for the `or_else` combinator, chaining a computation onto the end of a future which fails with an error."],["PollFn","A future which adapts a function returning `Poll`."],["ReadyFuture","A future that is immediately ready with a value"],["Shared","A future that is cloneable and can be polled in multiple threads. Use `Future::shared()` method to convert any future into a `Shared` future."],["Then","Future for the `then` combinator, chaining computations on the end of another future regardless of its outcome."],["UnwrapOrElse","Future for the `unwrap_or_else` combinator. It unwraps the result, returning the content of the `Ok` as `Output` or if the value is an `Err` then it calls `op` with its value."],["WithExecutor","Future for the `with_executor` combinator, assigning an executor to be used when spawning other futures."]],"trait":[["Future","A future represents an asychronous computation."],["FutureExt","An extension trait for `Future`s that provides a variety of convenient adapters."],["TryFuture","A convenience for futures that return `Result` values that includes a variety of adapters tailored to such futures."],["TryFutureExt","Adapters specific to `Result`-returning futures"],["UnsafeFutureObj","A custom implementation of a future trait object for `FutureObj`, providing a hand-rolled vtable."]]});