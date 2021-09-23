const Enemy = require("../lib/Enemy");
const Potion = require("../lib/Potion");

jest.mock("../lib/Potion.js");

test("creates an enemy object", () => {
  const enemy = new Enemy("maul", "lightsaber");

  expect(enemy.name).toBe("maul");
  expect(enemy.weapon).toBe("lightsaber");
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.potion).toEqual(expect.any(Object));
});

test("gets enemy's health value", () => {
  const enemy = new Enemy("Dave");

  expect(enemy.getHealth()).toEqual(
    expect.stringContaining(enemy.health.toString())
  );
});

test("checks if enemy is alive", () => {
  const enemy = new Enemy("Dave");

  expect(enemy.isAlive()).toBeTruthy();

  enemy.health = 0;

  expect(enemy.isAlive()).toBeFalsy();
});

test("subtracts from enemy's health", () => {
  const enemy = new Enemy("Dave");
  const oldHealth = enemy.health;

  enemy.reduceHealth(5);

  expect(enemy.health).toBe(oldHealth - 5);

  enemy.reduceHealth(99999);

  expect(enemy.health).toBe(0);
});

test("gets enemy's attack value", () => {
  const enemy = new Enemy("Dave");
  enemy.strength = 10;

  expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

test("gets a description of the enemy", () => {
  const enemy = new Enemy('maul', 'lightsaber')

  expect(enemy.getDescription()).toEqual(expect.stringContaining('maul'))
  expect(enemy.getDescription()).toEqual(expect.stringContaining('lightsaber'))
})