/**
 * Created by ICE on 2016/11/23.
 */

//1.��������
//2.����Ĺ��ܺ�����
//3.���ƶ���Ĺ��ܺ�����

//1.��������
function tapSelector(parent){
    //���û��������ĸ������������ڴ���;ת��jQuery����;
    this.parent = $(parent);
    //ҳ����س��ֵ�����
    this.init();
};

//2.��дԭ�Ͷ���
tapSelector.prototype = {
    constructor:tapSelector,
    //Ԥ����ҳ��;��һ�μ���ҳ�������;
    init: function () {
        this.renderDom();
        this.bindEvents();
    },
    //��Ⱦdom
    renderDom: function () {
        //���ȶ���һ������
        this.$container = $("<div class='tapContainer'></div>")
            .append("<div class='tap-top'>" +
            "<a href='javascript:;'>��ҳ</a>" +
            "<a href='javascript:;'>����</a>" +
            "<a href='javascript:;'>����</a>" +
            "</div>")
            .append("<div class='tap-bottom'>" +
            "<div class='current'>��������������111</div>" +
            "<div>��������������222</div>" +
            "<div>��������������333</div>" +
            "</div>")

        this.$container.appendTo(this.parent);

    },
    //����¼�
    bindEvents: function () {
        $(".tap-top").children().on("click", function () {
            var index = $(this).index();
            $(this).css("backgroundColor","pink").siblings().css("backgroundColor","orange");
            $(".tap-bottom").children().eq(index).show().siblings().hide();


        })

    }
};