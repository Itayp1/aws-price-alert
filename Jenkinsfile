pipeline {
    agent any
    tools { nodejs 'NodeJs' }

    stages {
        stage('Build') {
            steps {
                sh 'rm -rf aws-price-alert'
                sh 'git clone https://github.com/Itayp1/aws-price-alert.git'
     
                     sh 'cd .. && cp .env aws-price-alert'

                sh 'cd aws-price-alert && sudo docker build -t aws-price-alert .'


                script {
                    try {
                        sh 'sudo docker rm --force  aws-price-alert'
                                 } finally {
                        sh 'sudo docker run --detach -p 3001:3001 --name aws-price-alert  aws-price-alert'
                    }

                }

            }
        }
        stage('Test') {
            steps {
                echo 'Test 2231'
            }
        }
        stage('Deploy') {
            steps {
                echo 'done'

            }
        }
    }
}
