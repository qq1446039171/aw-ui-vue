<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <aw-demo />
    <w-card
      imgSrc="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0515%2F465567a6j00qadpfz001cc000hs00b4c.jpg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652526457&t=7733278d88991dc2480111b439e7d507"
      summary="Node.js+Express+Koa2+开发Web Server博客"
    />
    <w-card
      imgSrc="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0515%2F465567a6j00qadpfz001cc000hs00b4c.jpg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652526457&t=7733278d88991dc2480111b439e7d507"
      summary="Node.js+Express+Koa2+开发Web Server博客"
    >
      <template slot="footer">
        <div class="footer">
          <div class="level">中级 . 523人报名</div>
          <div class="price">￥899.00</div>
        </div>
      </template>
    </w-card>
    <w-card
      imgSrc="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0515%2F465567a6j00qadpfz001cc000hs00b4c.jpg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652526457&t=7733278d88991dc2480111b439e7d507"
      summary="Node.js+Express+Koa2+开发Web Server博客"
      :width="370"
      :imgHeight="90"
    >
      Node.js+Express+Koa2+开发Web Server博客
        <template slot="footer">
        <div class="footer">
          <div class="level">中级 . 523人报名</div>
          <div class="price">￥899.00</div>
        </div>
      </template>
    </w-card>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199a1;
  margin-bottom: 8px;
}
.price {
  color: #f01414;
}
</style>
