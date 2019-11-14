

<script>
export default {

  onShow () {
    wx.cloud.init()
    const db = wx.cloud.database('yougou-joven')
    console.log(db)
  }
}
</script>

<style>

</style>