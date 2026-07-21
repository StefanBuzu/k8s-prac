# k8s-prac

A simple Node.js API deployed to a local Kubernetes cluster using kind with ArgoCD and Helm.

## Architecture

```
Code push → GitHub Actions → updates values.yaml → ArgoCD syncs to cluster
```

## Project Structure

```
├── server.js                          # Node.js API
├── Dockerfile                         # Container image
├── helm/demo-api/                     # Helm chart
│   ├── Chart.yaml
│   ├── values.yaml                    # Image tag, replicas
│   └── templates/
│       ├── deployment.yaml
│       └── service.yaml
├── argocd-app.yaml                    # ArgoCD Application config
└── .github/workflows/build-and-push.yaml  # CI pipeline
```
