<template>
	<view>
		
		<view>
			
			<view class="header">
				<view class="title">购物车</view>
				<view class="SCOperate" @click="edit()" v-if="editFlag">编辑</view>
				<view class="SCOperate" @click="edit()" v-else>保存</view>
			</view>
			
			<view class="item" v-for="(item,i) in itemList" :key="i">
				
				<view class="left-box">
					<view class="lb01">
						<radio :checked="item.check" @click="itemStatusChange(i)"></radio>
					</view>
					<view class="lb02">
						<image :src="item.img"></image>
					</view>
					
				</view>
				<view class="right-box">
					<view class="rb01">
						{{item.name}}
					</view>
					<view class="rb02">
						<text v-for="(info,t) in item.attrs" :key="t">
							{{info.list[info.selected].name+" "}}
						</text>
						<!-- {{getAttrs(i)}} -->
						<!-- <text class="rb02-color">
							{{item.attrs[0].list[i].name}}
						</text>
						<text class="rb02-capacity">
							{{item.attrs[1].list[i].name}}
						</text>
						<text class="rb02-config">
							{{item.attrs[2].list[i].name}}
						</text> -->
					</view>
					<view class="rb03">
						<view class="rb03-l">
							<text class="currencySymbol">¥</text>
							<text class="price">{{item.price}}</text>
						</view>
						<view class="rb03-r">
							<view class="numBox">
								<view class="numBoxMinus" @click="toMinus(item.id)">-</view>
								<view class="numBoxNum">{{item.num}}</view>
								<view class="numBoxPlus" @click="toAdd(item.id)">+</view>
							</view>
						</view>
					</view>
					
				</view>
				
			</view>
			
			<view>
				<radio :checked="choose" @tap="changeStatus">全选</radio>
				<!-- <button type="default" @click="chooseAllSelected">全选</button> -->
				<!-- <button type="default" @click="chooseAllUnSelected">全不选</button> -->
			</view>
			
			<view v-if="editFlag">
				<text>合计：</text>
				<text>¥</text>
				<text>{{getTotalPrice}}</text>
				<text @click="toPay()" style="margin-left: 20rpx;">去结算</text>
				
			</view>
			
			<view v-else style="display: flex;">
				<view @click="deleteItem()"  style="cursor: pointer;  margin-right: 10rpx;">删除</view>
				<view @click="clearShoppingCart()" style="cursor: pointer; margin-right: 10rpx;">清空购物车</view>
			</view>
			
			
		</view>
		
	</view>
</template>

<script>
	import store from '@/store/index.js'//必须叫index.js
	import {mapState,mapMutations,mapGetters} from 'vuex'
	
	export default {
		data() {
			return {
				choose:false,
				editFlag:true
			};
		},
		onLoad() {
			
		},
		methods:{
			
			...mapMutations([
				'toMinusNum','toAddNum',
				'toChooseAllSelected','toChooseAllUnSelected',
				'selectAll','unSelectAll','changeItemStatus',
				'clearCart','removeItem'
				]),
			
			toMinus(id){
				
				let currentNum = this.itemList.find(item=>item.id==id).num
				if(currentNum==1){
					uni.showToast({
						title:"商品数量不能少于1"
					})
					return
				}
				
				this.toMinusNum(id)
				
				
			},
			toAdd(id){
				this.toAddNum(id)
			},
			chooseAllSelected(){
				this.selectAll()
			},
			chooseAllUnSelected(){
				this.unSelectAll()
			},
			changeStatus(){
				this.choose=!this.choose
				if(this.choose){
					this.selectAll()
				}else{
					this.unSelectAll()
				}
			},
			itemStatusChange(i){
				this.changeItemStatus(i)
				if(this.getCheckFalse){
					this.choose=true
				}else{
					this.choose=false
				}
			},
			edit(){
				this.editFlag=!this.editFlag
			},
			deleteItem(){
				this.removeItem()
			},
			clearShoppingCart(){
				this.clearCart();
				
			},
			toPay(){
				//去结算
				//1.会将购物车中的商品信息保存到订单详情表
				//2.会生成一条订单表的记录
				//3.删除购物车中的数据
				//跳转到订单页，核实订单去支付
			}
		},
		computed:{
			...mapState({
				itemList:state=>state.cart.list
			}),
			...mapGetters(['getAttrs','getCheckFalse','getTotalPrice']),
		}
	}
</script>

<style lang="scss">
	
	.header{
		border-bottom: 1px solid #D6D6DA;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		.title{
			// //border: 1px solid black;
			margin: 10rpx 250rpx 10rpx 0;
			font-size: 38rpx;
		}
		
		.SCOperate{
			margin: 10rpx 10rpx 10rpx 0;
			font-size: 36rpx;
			cursor: pointer;
		}
		
	}
	
	.item{
		border-bottom: 1px solid #F1F1F1;
		margin: 0 auto;
		width: 730rpx;
		height: 300rpx;
		display: flex;
		
		.left-box{
			//border: 1px solid black;
			width: 300rpx;
			display: flex;
			flex-flow: row nowrap;
			height: 300rpx;
			justify-content: center;
			align-items: center;
			
			.lb01{
				//border: 1px solid black;
				height: 300rpx;
				width: 100rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				
				checkbox{
					
				}
				
			}
			.lb02{
				//border: 1px solid black;
				height: 300rpx;
				width: 200rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				
				image{
					//border: 1px solid black;
					width: 150rpx;
					height: 200rpx;
				}
				
			}
			
		}
		
		.right-box{
			//border: 1px solid black;
			width: 430rpx;
			display: flex;
			flex-flow: column nowrap;
			justify-content: center;
			
			.rb01{
				//border: 1px solid black;
				font-size: 50rpx;
				
			}
			.rb02{
				//border: 1px solid black;
				font-size: 36rpx;
				color: #B4B3B1;
				
				text{
					margin-right: 10rpx;
				}
				
			}
			.rb03{
				//border: 1px solid black;
				display: flex;
				justify-content: space-between;
				
				.rb03-l{
					//border: 1px solid black;
					color: #F94F10;
					font-size: 39rpx;
					.currencySymbol{
						margin-left: 10rpx;
					}
					.price{
						margin-left: 10rpx;
					}
				}
				
				.rb03-r{
					//border: 1px solid black;
					
					.numBox{
						border: 1px solid #F4F4F4;
						display: flex;
						flex-flow: row nowrap;
						justify-content: space-between;
						min-width: 210rpx;
						height: 80rpx;
						
						.numBoxMinus{
							//border: 1px solid black;
							background-color: #F6F6F6;
							width: 70rpx;
							text-align: center;
							line-height: 80rpx;
							font-size: 56rpx;
							font-weight: 500;
							cursor: pointer;
						}
						.numBoxNum{
							//border: 1px solid black;
							min-width: 70rpx;
							text-align: center;
							line-height: 80rpx;
							font-size: 56rpx;
							
						}
						.numBoxPlus{
							//border: 1px solid black;
							background-color: #F6F6F6;
							width: 70rpx;
							text-align: center;
							line-height: 80rpx;
							font-size: 56rpx;
							font-weight: 500;
							cursor: pointer;
						}
						
					}
					
				}
			}
			
		}
		
	}

</style>
