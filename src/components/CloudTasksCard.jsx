import React from 'react';

// Define the cloud tasks with their objectives and tasks
const cloudTasks = [
  {
    title: "Create an Amazon S3 Bucket and Upload Files",
    objective: "Learn how to create an S3 bucket, configure permissions, and upload files.",
    tasks: [
      "Create an S3 bucket.",
      "Upload images or documents.",
      "Set permissions for public or private access.",
      "Enable versioning and lifecycle rules for file management."
    ]
  },
  {
    title: "Launch and Configure EC2 Instance",
    objective: "Understand how to launch, configure, and connect to an EC2 instance.",
    tasks: [
      "Choose an EC2 AMI (Amazon Machine Image).",
      "Configure instance type, key pair, and security group.",
      "Connect via SSH or EC2 instance connect.",
      "Install and configure a web server (Apache or Nginx)."
    ]
  },
  {
    title: "Set Up a Virtual Private Cloud (VPC)",
    objective: "Understand how to create and configure a VPC with subnets and route tables.",
    tasks: [
      "Create a custom VPC.",
      "Set up public and private subnets.",
      "Configure an internet gateway and route tables.",
      "Launch EC2 instances within the VPC."
    ]
  },
  {
    title: "AWS IAM Role Creation and Permissions",
    objective: "Learn how to create IAM roles and manage permissions.",
    tasks: [
      "Create an IAM role with limited permissions.",
      "Attach policies to the role.",
      "Assign the role to an EC2 instance.",
      "Test access to services like S3."
    ]
  },
  {
    title: "Deploy a Serverless Web Application using AWS Lambda and API Gateway",
    objective: "Build a serverless web app backend using Lambda and API Gateway.",
    tasks: [
      "Write a Lambda function to process requests.",
      "Set up API Gateway to expose RESTful endpoints.",
      "Integrate DynamoDB for data storage.",
      "Deploy and test the serverless application."
    ]
  },
  {
    title: "Amazon RDS MySQL Database Setup",
    objective: "Set up a relational database using Amazon RDS.",
    tasks: [
      "Launch a MySQL RDS instance.",
      "Configure security groups and backups.",
      "Connect to the database via a web app or EC2 instance.",
      "Test database connections and queries."
    ]
  },
  {
    title: "Create an Auto Scaling Group with Load Balancer",
    objective: "Set up an auto-scaling EC2 architecture for high availability.",
    tasks: [
      "Launch EC2 instances in different availability zones.",
      "Set up a load balancer (ELB) to distribute traffic.",
      "Configure auto-scaling rules based on CPU utilization.",
      "Test failover and scaling capabilities."
    ]
  },
  {
    title: "Deploy a Kubernetes Cluster with Amazon EKS",
    objective: "Learn to deploy, manage, and scale containerized applications using Kubernetes on AWS.",
    tasks: [
      "Set up an Amazon EKS cluster.",
      "Deploy containerized applications (Docker) to the EKS cluster.",
      "Manage cluster nodes and test auto-scaling."
    ]
  },
  {
    title: "Deploy a Web App using Azure App Service",
    objective: "Deploy a simple web application using Azure App Service.",
    tasks: [
      "Create an App Service instance.",
      "Deploy a web application (Node.js, Python, or .NET) using GitHub or local deployment.",
      "Configure custom domain and SSL certificates.",
      "Scale the app service plan vertically and horizontally."
    ]
  },
  {
    title: "Set Up Azure SQL Database",
    objective: "Launch a managed SQL Database in Azure.",
    tasks: [
      "Create an Azure SQL Database.",
      "Configure a server-level firewall and access control.",
      "Connect to the database using SQL Server Management Studio (SSMS).",
      "Run basic SQL queries and test backup/restore functionality."
    ]
  },
  {
    title: "Azure Function with Event-Driven Serverless Architecture",
    objective: "Create and deploy an event-driven Azure Function.",
    tasks: [
      "Create an Azure Function triggered by an HTTP request or a Blob upload.",
      "Set up integration with Azure Event Grid or Event Hubs.",
      "Test the function's output with a connected resource like Blob Storage or a Database."
    ]
  },
  {
    title: "Create an Azure Logic App for Workflow Automation",
    objective: "Automate workflows using Azure Logic Apps.",
    tasks: [
      "Create a Logic App that triggers on a specific event (e.g., new email or file upload).",
      "Integrate the Logic App with services like Office 365, Azure Storage, or Slack.",
      "Configure connectors for data retrieval and storage.",
      "Monitor and test the workflow execution."
    ]
  },
];

const CloudTasksCard = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">Cloud Knowledge</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cloudTasks.map((task, index) => (
          <div key={index} className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-white">{task.title}</h2>
            <p className="mb-3 text-gray-500">{task.objective}</p>
            <ul className="list-disc ml-5 space-y-2 text-gray-500">
              {task.tasks.map((taskDetail, idx) => (
                <li key={idx} className="text-sm">{taskDetail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CloudTasksCard;
