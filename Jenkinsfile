pipeline {
  agent {
    docker {
      image 'angular/ngcontainer'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh '''npm install
'''
      }
    }
  }
}