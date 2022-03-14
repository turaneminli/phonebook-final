pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS=credentials('dockerhub')
    }
    tools {nodejs "nodejs"}
    stages {
        stage('Git clone') {
            steps {
                git([url:'https://github.com/turaneminli/phonebook-final.git', branch: 'master', credentialsId: 'git'])
            }
        }
        stage('Testing') {
            steps {
                sh 'cd /backend'
                sh 'npm test'
            }
        }
        stage('Login docker') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Backend build docker') {
            steps {
                sh 'docker build -t turaneminli/phonebook-backend backend'
            }
        }
        stage('Backend push to dockerhub') {
            steps {
                sh 'docker push turaneminli/phonebook-backend:latest'
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