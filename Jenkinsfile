pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS=credentials('dockerhub')
    }
    stages {
        stage('Git clone') {
            steps {
                git([url:'https://github.com/turaneminli/phonebook-final.git', branch: 'master', credentialsId: 'git'])
            }
        }
        stage('Backend build docker') {
            steps {
                sh 'docker build -t turaneminli/phonebook-backend backend:latest'
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
                sh 'docker push turaneminli/phonebook-frontend:latest'
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