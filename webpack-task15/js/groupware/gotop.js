
        var GoTop = function ($ct) { //目标元素
            this.$ct = $ct
            this.show()
            this.bind()
        }
        GoTop.prototype.show = function () {
            var _this = this
            window.onscroll = function () {
                if (window.scrollY < 300) {
                    _this.$ct[0].style.display = "none"
                } else {
                    _this.$ct[0].style.display = "block"
                }
            }
        }
        GoTop.prototype.bind = function () {
            this.$ct.on('click', function () {
                var scrollTop = setInterval(function () {
                    if (window.scrollY === 0) {
                        clearInterval(scrollTop)
                    }
                    window.scrollBy(0, -20)
                    console.log(1)
                }, 10)
            })
        }

module.exports = GoTop