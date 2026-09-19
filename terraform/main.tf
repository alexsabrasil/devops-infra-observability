resource "aws_s3_bucket" "ecommerce_assets" {
  bucket = var.bucket_name

  tags = {
    Name        = "E-Commerce Observability Assets"
    Environment = var.environment
    ManagedBy   = "Terraform"
    Project     = "devops-infra-observability"
  }
}

resource "aws_s3_bucket_versioning" "ecommerce_assets" {
  bucket = aws_s3_bucket.ecommerce_assets.id

  versioning_configuration {
    status = "Enabled"
  }
}