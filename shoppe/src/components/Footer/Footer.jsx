import React from 'react'
// import { Link } from 'react-router-dom'
import * as S from './footer.style'

export default function Footer() {
	return (
		<S.Footer>
			<div className="container">
				<S.Footer1>
					<div>© 2021 KingShop. Tất cả các quyền được bảo lưu.</div>
					<S.Language>
						Quốc gia & Khu vực:
						<span>Singapore</span>
						<span>Indonesia</span>
						<span>Đài Loan</span>
						<span>Thái Lan</span>
						<span>Malaisia</span>
						<span>Philippines</span>
						<span>Brazil</span>
						<span>Colombia</span>
						<span>Chile</span>
						<span>Poland</span>
						<span>Spain</span>
						<span>France</span>
					</S.Language>
				</S.Footer1>
				<S.Footer3>
					<div>Chính sách bảo mật</div>
					<div>Quy chế hoạt động</div>
					<div>Chính sách vận chuyển</div>
					<div>Chính sách Trả hàng và hoàn tiền</div>
				</S.Footer3>
				<S.Footer2>
					<div>Công ty TNHH KingShop</div>
					<div>
						Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, Quận Hải Châu, Thành phố
						Đà Nẵng, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email:
						cskh@hotro.KingShop.vn
					</div>
					<div>
						Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Thanh Bình - Điện thoại
						liên hệ: 03.8868.5356 (ext 4678)
					</div>
					<div>
						Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Quảng Ngãi
						cấp lần đầu ngày 10/02/2015
					</div>
					<div>© 2015 - Bản quyền thuộc về Công ty TNHH KingShop</div>
				</S.Footer2>
			</div>
		</S.Footer>
	)
}
