output "database_endpoint" {
  description = "The connection endpoint of the database."
  value       = aws_db_instance.example.endpoint
}

output "web_server_ip" {
  description = "The public IP address of the web server."
  value       = aws_instance.web_server.public_ip
}

output "api_url" {
  description = "The URL of the deployed API."
  value       = aws_api_gateway_deployment.example.invoke_url
}
