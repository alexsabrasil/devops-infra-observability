output "bucket_name" {
  description = "Nome do bucket S3 provisionado"
  value       = aws_s3_bucket.ecommerce_assets.bucket
}

output "bucket_arn" {
  description = "ARN do bucket S3 provisionado"
  value       = aws_s3_bucket.ecommerce_assets.arn
}