# 基礎理論：なぜコンピューターは2進数で動くのか

## ① コンピューターは2進数で計算している
- 理由：
  - 電気信号の「オン / オフ」で動いている
  - オン（電流あり） → 1
  - オフ（電流なし）→ 0
- シンプルかつ確実に判定できるため、2進数が最適

---

## ② 2進数のしくみ（桁上がり）
- 使える数字は「0」「1」の2つだけ
- 1 + 1 = 10（2進数のルール）
  - 1 + 1 = 2（10進） → 2進数では「桁上がり」で `10`

| 10進数 | 2進数 |
|--------|--------|
| 0      | 0      |
| 1      | 1      |
| 2      | 10     |
| 3      | 11     |
| 4      | 100    |

---

## ③ n進数とは？
- 「n個の数字（0〜n−1）を使って数を表す方式」
- 例：
  - 2進数：0,1（2で桁上がり）
  - 10進数：0〜9（10で桁上がり）
  - 16進数：0〜9, A〜F（16で桁上がり）

---

## ④ 基数変換が試験で出る理由

### 🔹 なぜ 10進・2進・16進 を相互に変換する？

#### 10進数
- 人間が普段使う表記

#### 2進数
- コンピューターが内部で使う表記（オン/オフ）

#### 16進数
- 2進数（4ビット） = 16通り → 相性抜群！
- アドレス・色コードなどでよく使われる
  - 例： `A3` → `1010 0011`

---

## ⑤ 実用のイメージ（図）

```
2進数（内部処理）
↓ 4ビット単位で変換
16進数（エンジニアが見るアドレスやデータ）
↓ 人に見せるときや計算
10進数（普段使う数字）
```

---

## ✔ まとめ
- コンピューターが2進数を使うのは、電気的に最もシンプルだから
- 試験では10・2・16進数の変換が基本
- 16進数は2進数との相性が良く、現場でもよく使われている


# 基数変換のやり方（試験頻出！）

---

## ① 10進数 → n進数

### （1）整数部の変換

> nで割って、余りを下から順に並べる！

例：13 を 2進数に変換する場合

```
13 ÷ 2 = 6 ... 1  
 6 ÷ 2 = 3 ... 0  
 3 ÷ 2 = 1 ... 1  
 1 ÷ 2 = 0 ... 1  

→ 逆順に読む → 1101（答え）
```

💡 ポイント：
- 割って、商が0になるまで続ける
- 出てきた余りを下から読む！

---

### （2）小数部の変換

> nを掛けて、出てきた整数部分を左から順に読む！

例：0.625 を 2進数に変換する場合

```
0.625 × 2 = 1.25 → 1  
0.25 × 2 = 0.5   → 0  
0.5 × 2 = 1.0    → 1  

→ 左から読む → 0.101（答え）
```

💡 ポイント：
- 必要な桁数（例えば小数第3位まで）を決めておく！
- 無限に続く場合は「途中で切ってOK（近似値）」

---

## ② n進数 → 10進数

> 各桁に「基数の何乗かける」だけ！

### 例1：2進数 1101 を 10進数に変換

```
1×2³ + 1×2² + 0×2¹ + 1×2⁰
= 8 + 4 + 0 + 1 = 13
```

### 例2：16進数 1A を 10進数に変換

```
1×16¹ + A×16⁰ = 1×16 + 10×1 = 26
（※A=10、B=11、... F=15）
```

💡 ポイント：
- 右端の桁が「基数の0乗（=1）」になる
- 一の位は指数が0からスタート！
- これが「桁の重み」の正体

---

## ✔ 試験でよく出る変換パターン

| 出題形式 | 方法（ざっくり） |
|----------|------------------|
| 10進 → 2進 | 割って余りを逆に並べる |
| 2進 → 10進 | 桁ごとに 2ⁿ をかけて足す |
| 10進 → 16進 | 割って余り（16）＋ A〜Fに変換 |
| 16進 → 2進 | 各桁を4ビットの2進数に置き換え |
| 2進 → 16進 | 4桁ずつ区切って16進数に変換 |

---

## 💡補足：指数が0から始まる理由

- 一の位は「何倍にもしていない」= **1倍 = 基数⁰**
- 指数の性質：  
  aⁿ ÷ aⁿ = a⁰ = 1  
  → だから **n⁰ = 1**

---

## 📝まとめ

- 整数部は「割って余り」
- 小数部は「掛けて整数を抜き出す」
- n進数→10進数は「重み（nの累乗）をかけて足す」
- 桁の意味を理解すれば応用も効く！

