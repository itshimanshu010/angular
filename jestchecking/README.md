# Jestchecking

Angular 16

Steps:
1. Create new project (project name is jestchecking) by write this command on terminal
    ng new jestchecking  

2. Remove all the dependencies of jasmine and   karma 
    Also delete file of jasmine and karma (if they appear on root example: karma.config.js) or src folder(in src folder if there is test.js remove it )

    A. write this command on terminal

    npm uninstall karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter

    B. write this command on terminal

    npm uninstall @types/jasmine jasmine-core karma-coverage

    C.See if there any other package install in dependencies just uninstall it

    D.Now go to angular.json and the remove the test object there

3. Now Install Jest by write this command on terminal
    npm install jest jest-preset-angular @types/jest --save-dev

4. Create a setup.jest.ts file in src folder
    after creating this 
    add this line into it
        import 'jest-preset-angular/setup-jest';


5. Now Configure
    A. In tsconfig.spec.json 
        edit and add this 
        
        "extends": "./tsconfig.json",
        "compilerOptions": {
            "outDir": "./out-tsc/spec",
            "types": [
            "jest",
            "node"
            ]
        },
        "files": ["src/setup.jest.ts", "src/polyfills.ts"]

    B. In package.json 
        add this line

        "jest": {
                "preset": "jest-preset-angular",
                "setupFilesAfterEnv": [
                "<rootDir>/src/setup.jest.ts"
                ],
                "testPathIgnorePatterns": [
                "<rootDir>/node_modules/",
                "<rootDir>/dist/"
                ],
                "globals": {
                "ts-jest": {
                    "tsconfig": "<rootDir>/tsconfig.spec.json",
                    "stringifyContentPathRegex": "\\.html$"
                }
                }
            }
            
    C. In package.json
     go to script line then change add this 

        "test": "jest",
        "test-watch": "jest --watch",
        "test:coverage": "jest --coverage"

6. Now Run the test by write this command on terminal
            npm run test 
