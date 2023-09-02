#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimatiom from "chalk-animation";
import showBanner from 'node-banner'

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res,2000)
    })
}

async function welcome() {
(async () => {
	await showBanner('Welcome', 'Number Guessing Game');
})();
 let rainbowTitle = chalkAnimatiom.rainbow('Start Playing')
 await sleep()
 rainbowTitle.stop()
}

async function getRandomInt():Promise<number> {
    return Math.floor(Math.random() * 100);
  }
  

async function askQuestion() {
    await welcome()
    console.log(chalk.green(`Guess a number between 0 and 100`))
}

async function main() {
    do{
        await askQuestion()
        let randomNum = await getRandomInt()
        var random = await inquirer.prompt({
            type:'input',
            name:'random'
        })
        if(random.random === randomNum){
            console.log(chalk.yellow(`Congratulation! YOU WIN`))
        }
        else{
            console.log(chalk.red(`Sorry! YOU LOSE`))
        }
        var confirm = await inquirer.prompt({
            type:'input',
            name:'restart',
            message:'\n Press Y for to continue'
        })
    }while(confirm.restart.toLocaleLowerCase() === 'y' || confirm.restart.toLocaleLowerCase() === 'yes')
}

await main()