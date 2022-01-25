"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"category","label":"Introduction","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Overview","href":"/en/docs/","docId":"intro/overview"},{"type":"link","label":"\u8bbe\u8ba1\u7406\u5ff5","href":"/en/docs/intro/design","docId":"intro/design"},{"type":"link","label":"FAQ","href":"/en/docs/intro/faq","docId":"intro/faq"},{"type":"link","label":"\u9879\u76ee\u7ed3\u6784","href":"/en/docs/intro/layout","docId":"intro/layout"}]},{"type":"category","label":"Quick Start","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Quick Start","href":"/en/docs/getting-started/start","docId":"getting-started/start"},{"type":"link","label":"Usage","href":"/en/docs/getting-started/usage","docId":"getting-started/usage"},{"type":"link","label":"Plugins","href":"/en/docs/getting-started/plugin","docId":"getting-started/plugin"},{"type":"link","label":"Examples","href":"/en/docs/getting-started/examples","docId":"getting-started/examples"}]},{"type":"category","label":"Components","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"API","href":"/en/docs/component/api","docId":"component/api"},{"type":"link","label":"Config","href":"/en/docs/component/config","docId":"component/config"},{"type":"link","label":"Encoding","href":"/en/docs/component/encoding","docId":"component/encoding"},{"type":"link","label":"Errors","href":"/en/docs/component/errors","docId":"component/errors"},{"type":"link","label":"Logger","href":"/en/docs/component/log","docId":"component/log"},{"type":"link","label":"Metadata","href":"/en/docs/component/metadata","docId":"component/metadata"},{"type":"link","label":"Metrics","href":"/en/docs/component/metrics","docId":"component/metrics"},{"type":"link","label":"Registry","href":"/en/docs/component/registry","docId":"component/registry"},{"type":"link","label":"Routing and Load Balancing","href":"/en/docs/component/selector","docId":"component/selector"},{"type":"category","label":"Middleware","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Overview","href":"/en/docs/component/middleware/overview","docId":"component/middleware/overview"},{"type":"link","label":"Authentication","href":"/en/docs/component/middleware/auth","docId":"component/middleware/auth"},{"type":"link","label":"Circuit Breaker","href":"/en/docs/component/middleware/circuitbreaker","docId":"component/middleware/circuitbreaker"},{"type":"link","label":"Logging","href":"/en/docs/component/middleware/logging","docId":"component/middleware/logging"},{"type":"link","label":"Metrics","href":"/en/docs/component/middleware/metrics","docId":"component/middleware/metrics"},{"type":"link","label":"Rate Limiter","href":"/en/docs/component/middleware/ratelimit","docId":"component/middleware/ratelimit"},{"type":"link","label":"Recovery","href":"/en/docs/component/middleware/recovery","docId":"component/middleware/recovery"},{"type":"link","label":"Tracing","href":"/en/docs/component/middleware/tracing","docId":"component/middleware/tracing"},{"type":"link","label":"Validate","href":"/en/docs/component/middleware/validate","docId":"component/middleware/validate"}]},{"type":"category","label":"Transport","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Overview","href":"/en/docs/component/transport/overview","docId":"component/transport/overview"},{"type":"link","label":"HTTP","href":"/en/docs/component/transport/http","docId":"component/transport/http"},{"type":"link","label":"gRPC","href":"/en/docs/component/transport/grpc","docId":"component/transport/grpc"}]}]},{"type":"category","label":"User Guide","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Protobuf Guideline","href":"/en/docs/guide/api-protobuf","docId":"guide/api-protobuf"},{"type":"link","label":"OpenAPI Swagger","href":"/en/docs/guide/openapi","docId":"guide/openapi"},{"type":"link","label":"Dependency Injection","href":"/en/docs/guide/wire","docId":"guide/wire"},{"type":"link","label":"Ent","href":"/en/docs/guide/ent","docId":"guide/ent"}]},{"type":"category","label":"Deployment","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Docker","href":"/en/docs/devops/docker","docId":"devops/docker"}]},{"type":"category","label":"Community","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Contribution Guide","href":"/en/docs/community/contribution","docId":"community/contribution"},{"type":"link","label":"Documentation Guide","href":"/en/docs/community/documentation","docId":"community/documentation"}]}]},"docs":{"community/contribution":{"id":"community/contribution","title":"Contribution Guide","description":"Contribution Guide","sidebar":"docs"},"community/documentation":{"id":"community/documentation","title":"Documentation Guide","description":"Documentation Guide","sidebar":"docs"},"component/api":{"id":"component/api","title":"API","description":"Kratos implements REST and gRPC as the transport protocols. We mainly follow the API Design Guide from Google.","sidebar":"docs"},"component/config":{"id":"component/config","title":"Config","description":"Kratos configuration source can be specified multiple, and config will be merged into map[string]interface{}, and then get the value content through Scan or Value.","sidebar":"docs"},"component/encoding":{"id":"component/encoding","title":"Encoding","description":"We\'ve abstracted the Codec interface to unify the serialization/deserialization logic for processing requests, and you can implement your own Codec to support more formats. The specific source code is inencoding\u3002","sidebar":"docs"},"component/errors":{"id":"component/errors","title":"Errors","description":"You can define errors in protos and generate enums with protoc-gen-go.","sidebar":"docs"},"component/log":{"id":"component/log","title":"Logger","description":"Kratos contains only the simplest Log interface for business-adapted log access. When your business logic needs to use custom logs inside the kratos framework, you only need to implement the Log method simply.","sidebar":"docs"},"component/metadata":{"id":"component/metadata","title":"Metadata","description":"Microservices interact through HTTP and gRPC API, so the service architecture needs to be used for uniform Metadata transport.","sidebar":"docs"},"component/metrics":{"id":"component/metrics","title":"Metrics","description":"Interface","sidebar":"docs"},"component/middleware/auth":{"id":"component/middleware/auth","title":"Authentication","description":"Auth middleware is used to authenticate requests. Only those authenticated could be processed.","sidebar":"docs"},"component/middleware/circuitbreaker":{"id":"component/middleware/circuitbreaker","title":"Circuit Breaker","description":"Circuit breaker middleware for providing client-side breaker functionality, with sre breaker algorithm implemented by default\u3002","sidebar":"docs"},"component/middleware/logging":{"id":"component/middleware/logging","title":"Logging","description":"Logging middleware is used to print the details of requests received or initiated by the service.","sidebar":"docs"},"component/middleware/metrics":{"id":"component/middleware/metrics","title":"Metrics","description":"Metrics middleware is used to monitor performance metrics for services, counting request time and request counts.","sidebar":"docs"},"component/middleware/overview":{"id":"component/middleware/overview","title":"Overview","description":"Kratos has a series of built-in middleware to deal with common purpose such as logging or metrics. You could also implement Middleware interface to develop your custom middleware to process common business such as the user authentication etc.","sidebar":"docs"},"component/middleware/ratelimit":{"id":"component/middleware/ratelimit","title":"Rate Limiter","description":"Rate limiter middleware for server-side traffic control, with bbr limiter algorithm implemented by default.","sidebar":"docs"},"component/middleware/recovery":{"id":"component/middleware/recovery","title":"Recovery","description":"Recovery middleware is used for abnormal recovery and prevents the program from exiting directly in the event of an exception to the service.","sidebar":"docs"},"component/middleware/tracing":{"id":"component/middleware/tracing","title":"Tracing","description":"We use OpenTelemetry for distributed tracing.","sidebar":"docs"},"component/middleware/validate":{"id":"component/middleware/validate","title":"Validate","description":"Validate middleware uses proto-gen-validate generated code for parameter validation. You could write parameter validation rules in proto files and generate codes, in order to automatically parameter validation.","sidebar":"docs"},"component/registry":{"id":"component/registry","title":"Registry","description":"Interface","sidebar":"docs"},"component/selector":{"id":"component/selector","title":"Routing and Load Balancing","description":"The main interface for routing and load balancing is Selector, but a default Selector implementation is also provided in the same directory. This implementation can implement node weight calculation, route filtering, and load balancing algorithms by replacing NodeBuilder, Filter, Balancer, and Pluggable","sidebar":"docs"},"component/transport/grpc":{"id":"component/transport/grpc","title":"gRPC","description":"Our transporter/grpc is developed upon gRPC, and implements Transporter interface. You could use it for the communication between services on gRPC protocol.","sidebar":"docs"},"component/transport/http":{"id":"component/transport/http","title":"HTTP","description":"Transporter/http is based on the gorilla/mux HTTP routing framework to implement Transporter to register http to kratos.Server().","sidebar":"docs"},"component/transport/overview":{"id":"component/transport/overview","title":"Overview","description":"The Kratos framework abstracts the transport layer, the developers can access the implementation through the implementation interface, and the framework implements the communication protocol transport layer of gRPC and HTTP by default. Developers can refer to the official implementation code when implementing the communication protocol transport layer.","sidebar":"docs"},"devops/docker":{"id":"devops/docker","title":"Docker","description":"Docker","sidebar":"docs"},"getting-started/examples":{"id":"getting-started/examples","title":"Examples","description":"Kratos examples","sidebar":"docs"},"getting-started/plugin":{"id":"getting-started/plugin","title":"Plugins","description":"Kratos Plugins","sidebar":"docs"},"getting-started/start":{"id":"getting-started/start","title":"Quick Start","description":"Version","sidebar":"docs"},"getting-started/usage":{"id":"getting-started/usage","title":"Usage","description":"Installation","sidebar":"docs"},"guide/api-protobuf":{"id":"guide/api-protobuf","title":"Protobuf Guideline","description":"This documentation is the guideline of Protobuf definition which recommended in Kratos project.","sidebar":"docs"},"guide/ent":{"id":"guide/ent","title":"Ent","description":"Any ORM or library is supported in Kratos project for data accessing. Please refer to the examples for integration.","sidebar":"docs"},"guide/openapi":{"id":"guide/openapi","title":"OpenAPI Swagger","description":"OpenAPI Swagger","sidebar":"docs"},"guide/wire":{"id":"guide/wire","title":"Dependency Injection","description":"Wire is a compile-time dependency injection tool.","sidebar":"docs"},"intro/design":{"id":"intro/design","title":"\u8bbe\u8ba1\u7406\u5ff5","description":"\u672c\u7bc7\u6587\u6863\u9610\u8ff0Kratos\u7684\u8bbe\u8ba1\u7406\u5ff5\uff0c\u4ecb\u7ecdKratos\u9879\u76ee\u7684\u6574\u4f53\u60c5\u51b5\u548c\u4e3b\u8981\u7ec4\u4ef6","sidebar":"docs"},"intro/faq":{"id":"intro/faq","title":"FAQ","description":"Kratos FAQ","sidebar":"docs"},"intro/layout":{"id":"intro/layout","title":"\u9879\u76ee\u7ed3\u6784","description":"Kratos \u9879\u76ee\u5de5\u7a0b\u9aa8\u67b6\uff0cGo \u9879\u76ee\u76ee\u5f55\u7ed3\u6784\uff0c\u5feb\u901f\u521b\u5efa\u5de5\u7a0b\u9879\u76ee","sidebar":"docs"},"intro/overview":{"id":"intro/overview","title":"Overview","description":"Kratos is a microservice-oriented governance framework implements by golang, which offers convenient capabilities to help you quickly build a bulletproof application from scratch.","sidebar":"docs"}}}')}}]);