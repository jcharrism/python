
Descripción del Diagrama
Usuarios y Clientes: Interactúan con la aplicación a través de Internet.
Cloudflare:
Cloudflare Workers: Procesan solicitudes para redimensionar y almacenar en caché las imágenes.
Cloudflare CDN: Proporciona almacenamiento en caché y distribución de contenido.
Cloudflare Logs: Genera y almacena registros de las solicitudes.
Kubernetes Cluster:
Pods del Microservicio: Despliegan y ejecutan el microservicio en Python.
Prometheus: Monitorea métricas del sistema y de la aplicación.
Grafana: Visualiza métricas recogidas por Prometheus.
Fluentd: Recolecta y envía logs a Elasticsearch.
Elasticsearch: Almacena logs para análisis.
Kibana: Analiza y visualiza logs almacenados en Elasticsearch.
Jaeger: Realiza trazabilidad de las transacciones y solicitudes en el sistema.
