pipeline {
  agent {
    node {
      label 'terry'
    }

  }
  stages {
    stage('step1') {
      steps {
        sh 'npm install'
        sh 'npm build'
      }
    }
  }
}