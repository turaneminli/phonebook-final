pipeline {
    agent {
        docker { image 'node:16.13.1-alpine' }
    }
    stages {
        stage('Backend build docker') {
            steps {
                sh 'docker build -t turaneminli/phonebook-backend backend'
            }
        }
        stage('Backend push to dockerhub') {
            steps {
                sh 'docker push turaneminli/phonebook-backend'
            }
        }
        stage('Frontend build docker') {
            steps {
                sh 'docker build -t turaneminli/phonebook-frontend frontend'
            }
        }
        stage('Frontend push to dockerhub') {
            steps {
                sh 'docker push turaneminli/phonebook-frontend'
            }
        }
        stage('Update k8s for backend') {
            steps {
                sh 'kubectl apply -f infra/k8s/backend'
            }
        }
        stage('Update k8s for frontend') {
            steps {
                sh 'kubectl apply -f infra/k8s/frontend'
            }
        }
    }
}