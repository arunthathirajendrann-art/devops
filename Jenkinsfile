pipeline {
    agent any

    tools {
        nodejs 'NodeJS 18'
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install --ignore-scripts'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Smoke Test') {
            steps {
                sh 'node -e "require(\"./app\"); console.log(\"Application loads successfully\")"'
            }
        }
    }

    post {
        always {
            echo 'Jenkins build finished.'
        }
        success {
            echo 'All checks passed.'
        }
    }
}
