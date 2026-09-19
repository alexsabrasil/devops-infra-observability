variable "bucket_name" {
  description = "Nome do bucket S3 da E-Commerce API"
  type        = string
  default     = "ecommerce-observability-assets"
}

variable "environment" {
  description = "Ambiente da infraestrutura"
  type        = string
  default     = "development"
}