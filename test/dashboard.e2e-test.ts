import { expect, test } from '@playwright/test'

test('display day orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação a ontem')).toBeVisible()

  // await page.waitForTimeout(2000)
})

test('display month orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('210', { exact: true })).toBeVisible()
  expect(page.getByText('+15% em relação ao mês passado')).toBeVisible()

  // await page.waitForTimeout(2000)
})

test('display canceled orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('5', { exact: true })).toBeVisible()
  expect(page.getByText('-1% em relação ao mês passado')).toBeVisible()

  // await page.waitForTimeout(2000)
})

test('display month revenue metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('R$ 213,45')).toBeVisible()
  expect(page.getByText('+18% em relação ao mês passado')).toBeVisible()

  // await page.waitForTimeout(2000)
})
