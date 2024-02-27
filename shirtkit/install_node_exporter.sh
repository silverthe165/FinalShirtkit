#!/bin/bash

# Script to install and configure Prometheus Node Exporter on CentOS

# Change to the desired directory
cd /usr/src/

# Download Node Exporter
wget https://github.com/prometheus/node_exporter/releases/download/v1.7.0/node_exporter-1.7.0.linux-amd64.tar.gz

# Extract Node Exporter tarball
tar -xvzf node_exporter-1.7.0.linux-amd64.tar.gz

# Change to Node Exporter directory
cd node_exporter-1.7.0.linux-amd64/

# Copy Node Exporter binary to /usr/bin/
cp node_exporter /usr/bin/

# Create systemd service file
cat <<EOF | tee /etc/systemd/system/node_exporter.service
[Unit]
Description=Prometheus Node Exporter
After=network.target

[Service]
ExecStart=/usr/bin/node_exporter
Restart=always
User=root

[Install]
WantedBy=multi-user.target
EOF

# Reload systemd
systemctl daemon-reload

# Start Node Exporter service
systemctl start node_exporter

# Enable Node Exporter to start on boot
systemctl enable node_exporter

# Display status
systemctl status node_exporter